import videojs from 'video.js';
import {version as VERSION} from '../package.json';

const Plugin = videojs.getPlugin('plugin');

// Default options for the plugin.
const defaults = {
  displayFullChapter: false,
  chapterDisplayLength: 10 // px
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;

/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */
class SeekChapter extends Plugin {

  /**
   * Create a SeekChapter plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options) {
    // the parent class will add player under this.player
    super(player);
    this.chapters = [];
    this.cues = null;
    this.regTimmer = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
    this.options = videojs.mergeOptions(defaults, options);

    this.player.ready(() => {
      this.player.addClass('vjs-seek-chapter');
      this.chapterCues = [];
    });

    this.player.on('loadedmetadata', () => {
      this.controlBar = this.player.getChild('controlBar');
      this.progressControl = this.controlBar.getChild('progressControl');
      this.seeker = this.progressControl.getChild('SeekBar');
      this.mouseDisplay = this.seeker.getChild('MouseTimeDisplay');

      if (!this.mouseDisplay) {
        return;
      }

      this.tooltip = this.mouseDisplay.getChild('TimeTooltip');
      this.duration = this.player.duration();

      const tracks = player.textTracks();
      let chapterTrack;

      for (let i = 0; tracks.length > i; i++) {
        if (tracks[i].kind === 'chapters') {
          chapterTrack = tracks[i];
        }
      }
      if (chapterTrack) {
        this.chapterCues = chapterTrack.cues;

        const cuesReady = new Promise((res, rej) => {
          const interval = setInterval(() => {
            if (!this.cues) {
              this.cues = this.chapterCues.cues_;
            } else {
              clearInterval(interval);
              res(true);
            }
          }, 250);
        });

        cuesReady.then(() => this.addChapterToProgressBar());
      }

    });
  }

  addChapterToProgressBar() {
    this.cues.forEach(vttCue => {
      const chapter = document.createElement('div');
      const startPosition = (vttCue.startTime + 1) / this.duration * 100;
      const endPosition = vttCue.endTime / this.duration * 100;

      chapter.className = 'chapter-bar';
      chapter.setAttribute('start', vttCue.startTime);
      chapter.setAttribute('end', vttCue.endTime);
      chapter.setAttribute('text', vttCue.text);
      chapter.style.left = startPosition + '%';
      chapter.style.width = this.options.displayFullChapter ? (endPosition - startPosition) + '%' : this.options.chapterDisplayLength + 'px';
      this.chapters.push(chapter);
      this.seeker.el().appendChild(chapter);
    });

    this.updateToolTip();
  }

  updateToolTip() {
    const tooltipEl = this.tooltip.el();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {

          this.chapters.forEach(chapter => {
            const rect1 = chapter.getBoundingClientRect();
            const rect2 = this.mouseDisplay.el().getBoundingClientRect();
            const overlap = !(rect1.right < rect2.left ||
              rect1.left > rect2.right ||
              rect1.bottom < rect2.top ||
              rect1.top > rect2.bottom);

            if (overlap && this.regTimmer.test(tooltipEl.innerText)) {
              tooltipEl.innerText = tooltipEl.innerText + ' ' + chapter.getAttribute('text');
            }
          });

          // this.cues.forEach(vttCue => {
          //   if (this.hmsToSecondsOnly(tooltipEl.innerText) > vttCue.startTime
          //     && this.hmsToSecondsOnly(tooltipEl.innerText) < vttCue.endTime
          //     && this.regTimmer.test(tooltipEl.innerText)) {
          //     tooltipEl.innerText = tooltipEl.innerText + " " + vttCue.text;
          //   }
          // })
        }
      }
    });

    observer.observe(tooltipEl, { childList: true });
  }
  hmsToSecondsOnly(str) {
    const p = str.split(':');
    let s = 0; let m = 1;

    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10);
      m *= 60;
    }
    return s;
  }
}

// Define default values for the plugin's `state` object here.
SeekChapter.defaultState = {};

// Include the version number.
SeekChapter.VERSION = VERSION;

// Register the plugin with video.js.
registerPlugin('seekChapter', SeekChapter);

export default SeekChapter;
