<template>
  <video class="flv-player"></video>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
  import flvjs from 'flv.js'

  export default {
    name: 'flv-player',
    props: {
      // MediaDataSource
      type: String, // Indicates media type, 'flv' or 'mp4'
      isLive: Boolean, //, // Indicates whether the data source is a live stream
      cors: Boolean, // Indicates whether to enable CORS for http fetching
      withCredentials: Boolean, // Indicates whether to do http fetching with cookies
      hasAudio: Boolean, // Indicates whether the stream has audio track
      hasVideo: Boolean, // Indicates whether the stream has video track
      duration: Number, // Indicates total media duration, in milliseconds
      filesize: Number, // Indicates total file size of media file, in bytes
      url: String, // Indicates media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket)
      segments: Array, //<MediaSegment>	Optional field for multipart playback, see MediaSegment

      // MediaSegment
      // duration: Number, // Required field,indicates segment duration in milliseconds
      // filesize: Number, // Optional field,indicates segment file size in bytes
      // url: string, Required field,indicates segment file URL

      // Config
      enableWorker: Boolean, // false	Enable separated thread for transmuxing (unstable for now)
      enableStashBuffer: Boolean, // true	Enable IO stash buffer. Set to false if you need realtime (minimal latency) for live stream playback, but may stalled if there's network jittering.
      stashInitialSize: Number, // 384KB	Indicates IO stash buffer initial size. Default is 384KB. Indicate a suitable size can improve video load/seek time.
      isLive: Boolean, // false	Same to isLive in MediaDataSource, ignored if has been set in MediaDataSource structure.
      lazyLoad: Boolean, // true	Abort the http connection if there's enough data for playback.
      lazyLoadMaxDuration: Number, // 3 * 60	Indicates how many seconds of data to be kept for lazyLoad.
      lazyLoadRecoverDuration: Number, // 30	Indicates the lazyLoad recover time boundary in seconds.
      deferLoadAfterSourceOpen: Boolean, // true	Do load after MediaSource sourceopen event triggered. On Chrome, tabs which be opened in background may not trigger sourceopen event until switched to that tab.
      autoCleanupSourceBuffer: Boolean, // false	Do auto cleanup for SourceBuffer
      autoCleanupMaxBackwardDuration: Number, // 3 * 60	When backward buffer duration exceeded this value (in seconds), do auto cleanup for SourceBuffer
      autoCleanupMinBackwardDuration: Number, // 2 * 60	Indicates the duration in seconds to reserve for backward buffer when doing auto cleanup.
      fixAudioTimestampGap: Boolean, // true	Fill silent audio frames to avoid a/v unsync when detect large audio timestamp gap.
      accurateSeek: Boolean, // false	Accurate seek to any frame, not limited to video IDR frame, but may a bit slower. Available on Chrome > 50, FireFox and Safari.
      seekType: String, // 'range'	'range' use range request to seek, or 'param' add params into url to indicate request range.
      seekParamStart: String, // 'bstart'	Indicates seek start parameter name for seekType = 'param'
      seekParamEnd: String, // 'bend'	Indicates seek end parameter name for seekType = 'param'
      rangeLoadZeroStart: Boolean, // false	Send Range: bytes=0- for first time load if use Range seek
      customSeekHandler: Object, // undefined	Indicates a custom seek handler
      reuseRedirectedURL: Boolean, // false	Reuse 301/302 redirected url for subsequence request like seek, reconnect, etc.
      referrerPolicy: String, // no-referrer-when-downgrade	Indicates the Referrer Policy when using FetchStreamLoader
    },

    flvPlayer: {},

    data() {
      return {}
    },

    // computed: {},

    // watch: {},

    // beforeCreate: function () {},
    created: function () {
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        hasAudio: false,
        lazyLoad: false,
        enableStashBuffer: false,
        autoCleanupSourceBuffer: true,
        autoCleanupMaxBackwardDuration: 0.2,
        autoCleanupMinBackwardDuration: 0.2,
        // url: this.url
      });
    },
    // beforeMount: function () {},

    mounted: function () {
      this.flvPlayer.attachMediaElement(this.$el)
       // this.flvPlayer.load()
      // this.flvPlayer.play()
    },

    // beforeUpdate: function () {},
    // updated: function () {},
    // beforeDestroy: function () {},
    // destroyed: function () {},

    methods: {}
  }

</script>

<style scoped>


</style>
