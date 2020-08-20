/*! @name videojs-seek-chapter @version 0.1.0 @license MIT */
import videojs from 'video.js';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var version = "0.1.0";

var Plugin = videojs.getPlugin('plugin'); // Default options for the plugin.

var defaults = {
  displayFullChapter: false,
  chapterDisplayLength: 10 //px

}; // Cross-compatibility for Video.js 5 and 6.

var registerPlugin = videojs.registerPlugin || videojs.plugin;
/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */

var SeekChapter =
/*#__PURE__*/
function (_Plugin) {
  _inheritsLoose(SeekChapter, _Plugin);

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
  function SeekChapter(player, options) {
    var _this;

    // the parent class will add player under this.player
    _this = _Plugin.call(this, player) || this;
    _this.chapters = [];
    _this.regTimmer = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
    _this.options = videojs.mergeOptions(defaults, options);

    _this.player.ready(function () {
      _this.player.addRemoteTextTrack({
        kind: "chapters",
        src: "src/chapters.vtt",
        label: "Chapters",
        default: false
      }, true);

      _this.player.addClass('vjs-seek-chapter');

      _this.chapterCues = [];
    });

    _this.player.on('loadedmetadata', function () {
      _this.controlBar = _this.player.getChild("controlBar");
      _this.progressControl = _this.controlBar.getChild("progressControl");
      _this.seeker = _this.progressControl.getChild("SeekBar");
      _this.mouseDisplay = _this.seeker.getChild("MouseTimeDisplay");
      _this.tooltip = _this.mouseDisplay.getChild("TimeTooltip");
      _this.duration = _this.player.duration();
      _this.cues;
      var tracks = player.textTracks();
      var chapterTrack;

      for (var i = 0; tracks.length > i; i++) {
        if ('chapters' === tracks[i].kind) {
          chapterTrack = tracks[i];
        }
      }

      _this.chapterCues = chapterTrack.cues;
      var cuesReady = new Promise(function (res, rej) {
        var interval = setInterval(function () {
          if (!_this.cues) {
            _this.cues = _this.chapterCues.cues_;
          } else {
            clearInterval(interval);
            res(true);
          }
        }, 250);
      });
      cuesReady.then(function () {
        return _this.addChapterToProgressBar();
      });
    });

    return _this;
  }

  var _proto = SeekChapter.prototype;

  _proto.addChapterToProgressBar = function addChapterToProgressBar() {
    var _this2 = this;

    this.cues.forEach(function (vttCue) {
      var chapter = document.createElement('div');
      var startPosition = (vttCue.startTime + 1) / _this2.duration * 100;
      var endPosition = vttCue.endTime / _this2.duration * 100;
      chapter.className = "chapter-bar";
      chapter.setAttribute("start", vttCue.startTime);
      chapter.setAttribute("end", vttCue.endTime);
      chapter.setAttribute("text", vttCue.text);
      chapter.style.left = startPosition + "%";
      chapter.style.width = _this2.options.displayFullChapter ? endPosition - startPosition + "%" : _this2.options.chapterDisplayLength + "px";

      _this2.chapters.push(chapter);

      _this2.seeker.el().appendChild(chapter);
    });
    this.updateToolTip();
  };

  _proto.updateToolTip = function updateToolTip() {
    var _this3 = this;

    var tooltipEl = this.tooltip.el();
    var observer = new MutationObserver(function (mutationsList) {
      for (var _iterator = mutationsList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var mutation = _ref;

        if (mutation.type == 'childList') {
          _this3.chapters.forEach(function (chapter) {
            var rect1 = chapter.getBoundingClientRect();

            var rect2 = _this3.mouseDisplay.el().getBoundingClientRect();

            var overlap = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);

            if (overlap && _this3.regTimmer.test(tooltipEl.innerText)) {
              tooltipEl.innerText = tooltipEl.innerText + " " + chapter.getAttribute("text");
            }
          }); // this.cues.forEach(vttCue => {
          //   if (this.hmsToSecondsOnly(tooltipEl.innerText) > vttCue.startTime
          //     && this.hmsToSecondsOnly(tooltipEl.innerText) < vttCue.endTime
          //     && this.regTimmer.test(tooltipEl.innerText)) {
          //     tooltipEl.innerText = tooltipEl.innerText + " " + vttCue.text;
          //   }
          // })

        }
      }
    });
    observer.observe(tooltipEl, {
      childList: true
    });
  };

  _proto.hmsToSecondsOnly = function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0,
        m = 1;

    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10);
      m *= 60;
    }

    return s;
  };

  return SeekChapter;
}(Plugin); // Define default values for the plugin's `state` object here.


SeekChapter.defaultState = {}; // Include the version number.

SeekChapter.VERSION = version; // Register the plugin with video.js.

registerPlugin('seekChapter', SeekChapter);

export default SeekChapter;
