export default function (a) {
  var t,
    o,
    e,
    h,
    l,
    i,
    c,
    n =
      '<svg><symbol id="icon-spinner-third" viewBox="0 0 1024 1024"><path d="M957.42 729.16z m-44 12.22l-55.66-31.8a31.84 31.84 0 0 1-13.88-38.4A368 368 0 1 1 512 144c11.78 0 23.42 0.58 34.92 1.66-1.48-0.14-2.96-0.3-4.46-0.42-16.98-1.38-30.46-14.62-30.46-31.66v-64a32 32 0 0 1 30.68-32C532.48 16.92 522.36 16 512 16 238 16 16 238 16 512s222 496 496 496c196 0 364.84-113.9 445.42-278.84-8.26 15.72-28.46 21.1-44 12.22z" opacity=".4" ></path><path d="M542.46 145.24c-16.98-1.38-30.46-14.62-30.46-31.66V49.46c0-18.22 15.34-33.56 33.54-32.34C803.84 34.36 1008 249.34 1008 512a492 492 0 0 1-50 216.48c-8 16.34-28.74 22-44.52 12.9l-55.68-31.8c-14.82-8.46-19.66-26.7-12.4-42.14A365.06 365.06 0 0 0 880 512c0-192.98-148.54-351.26-337.54-366.76z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M347.8 794.8c0 4-4.6 7.2-10.4 7.2-6.6 0.6-11.2-2.6-11.2-7.2 0-4 4.6-7.2 10.4-7.2 6-0.6 11.2 2.6 11.2 7.2z m-62.2-9c-1.4 4 2.6 8.6 8.6 9.8 5.2 2 11.2 0 12.4-4s-2.6-8.6-8.6-10.4c-5.2-1.4-11 0.6-12.4 4.6z m88.4-3.4c-5.8 1.4-9.8 5.2-9.2 9.8 0.6 4 5.8 6.6 11.8 5.2 5.8-1.4 9.8-5.2 9.2-9.2-0.6-3.8-6-6.4-11.8-5.8zM505.6 16C228.2 16 16 226.6 16 504c0 221.8 139.6 411.6 339 478.4 25.6 4.6 34.6-11.2 34.6-24.2 0-12.4-0.6-80.8-0.6-122.8 0 0-140 30-169.4-59.6 0 0-22.8-58.2-55.6-73.2 0 0-45.8-31.4 3.2-30.8 0 0 49.8 4 77.2 51.6 43.8 77.2 117.2 55 145.8 41.8 4.6-32 17.6-54.2 32-67.4-111.8-12.4-224.6-28.6-224.6-221 0-55 15.2-82.6 47.2-117.8-5.2-13-22.2-66.6 5.2-135.8 41.8-13 138 54 138 54 40-11.2 83-17 125.6-17s85.6 5.8 125.6 17c0 0 96.2-67.2 138-54 27.4 69.4 10.4 122.8 5.2 135.8 32 35.4 51.6 63 51.6 117.8 0 193-117.8 208.4-229.6 221 18.4 15.8 34 45.8 34 92.8 0 67.4-0.6 150.8-0.6 167.2 0 13 9.2 28.8 34.6 24.2C872.4 915.6 1008 725.8 1008 504 1008 226.6 783 16 505.6 16zM210.4 705.8c-2.6 2-2 6.6 1.4 10.4 3.2 3.2 7.8 4.6 10.4 2 2.6-2 2-6.6-1.4-10.4-3.2-3.2-7.8-4.6-10.4-2z m-21.6-16.2c-1.4 2.6 0.6 5.8 4.6 7.8 3.2 2 7.2 1.4 8.6-1.4 1.4-2.6-0.6-5.8-4.6-7.8-4-1.2-7.2-0.6-8.6 1.4z m64.8 71.2c-3.2 2.6-2 8.6 2.6 12.4 4.6 4.6 10.4 5.2 13 2 2.6-2.6 1.4-8.6-2.6-12.4-4.4-4.6-10.4-5.2-13-2z m-22.8-29.4c-3.2 2-3.2 7.2 0 11.8 3.2 4.6 8.6 6.6 11.2 4.6 3.2-2.6 3.2-7.8 0-12.4-2.8-4.6-8-6.6-11.2-4z"  ></path></symbol><symbol id="icon-envelope-open-text" viewBox="0 0 1024 1024"><path d="M127.999433 515.202256L455.797979 752.001206a95.439577 95.439577 0 0 0 112.399502 0L895.996028 515.202256V192.003689a63.999716 63.999716 0 0 0-63.999717-63.999717H191.999149a63.999716 63.999716 0 0 0-63.999716 63.999717z m191.999148-195.199135a31.999858 31.999858 0 0 1 31.999858-31.999858h319.998582a31.999858 31.999858 0 0 1 31.999858 31.999858v31.999858a31.999858 31.999858 0 0 1-31.999858 31.999858H351.998439a31.999858 31.999858 0 0 1-31.999858-31.999858z m0 159.999291a31.999858 31.999858 0 0 1 31.999858-31.999858h319.998582a31.999858 31.999858 0 0 1 31.999858 31.999858v31.999858a31.999858 31.999858 0 0 1-31.999858 31.999858H351.998439a31.999858 31.999858 0 0 1-31.999858-31.999858z" opacity=".4" ></path><path d="M703.996879 320.003121a31.999858 31.999858 0 0 0-31.999858-31.999858H351.998439a31.999858 31.999858 0 0 0-31.999858 31.999858v31.999858a31.999858 31.999858 0 0 0 31.999858 31.999858h319.998582a31.999858 31.999858 0 0 0 31.999858-31.999858z m-31.999858 127.999433H351.998439a31.999858 31.999858 0 0 0-31.999858 31.999858v31.999858a31.999858 31.999858 0 0 0 31.999858 31.999858h319.998582a31.999858 31.999858 0 0 0 31.999858-31.999858v-31.999858a31.999858 31.999858 0 0 0-31.999858-31.999858z m-13.199942-365.198381C625.197228 58.404281 558.397524-0.595457 511.99773 0.00454c-46.399794-0.599997-113.199498 58.399741-146.799349 82.799633L303.998652 128.003972h415.998156zM127.999433 258.003396c-47.799788 35.399843-85.399621 63.19972-91.199596 67.999699A95.999574 95.999574 0 0 0 0 401.40276v21.399905l127.999433 92.399591z m859.19619 67.999699c-5.799974-4.59998-43.399808-32.599855-91.199595-67.7997v256.998861l127.999432-92.399591v-21.399905a95.999574 95.999574 0 0 0-36.799837-75.399665zM511.99773 834.200841a159.999291 159.999291 0 0 1-93.799584-30.399865L0 501.802315V928.000426a95.999574 95.999574 0 0 0 95.999574 95.999574h831.996312a95.999574 95.999574 0 0 0 95.999574-95.999574V501.802315l-418.198146 301.998661a159.999291 159.999291 0 0 1-93.799584 30.399865z"  ></path></symbol><symbol id="icon-tv-retro" viewBox="0 0 1024 1024"><path d="M783.9614 336.097636s0-15.997729-335.952318-15.997729c-303.956858 0-303.956858 15.997729-303.956858 15.997729s-15.997729 0-15.997729 239.965941 15.997729 239.965941 15.997729 239.965941 0 15.997729 303.956858 15.997729c335.952317 0 335.952317-15.997729 335.952318-15.997729s15.997729 0 15.997729-239.965941-15.997729-239.965941-15.997729-239.965941zM346.303518 191.978092h331.392964l71.269885-82.628272a63.990918 63.990918 0 1 0-90.587143-90.587143L512 188.518583 365.620776 18.962649a63.990918 63.990918 0 0 0-90.587143 90.567145z" opacity=".4" ></path><path d="M927.940964 192.118072H96.059036a95.986376 95.986376 0 0 0-95.986376 95.986376v575.918258a95.986376 95.986376 0 0 0 95.986376 95.986376h31.995459v63.990918h95.986376l42.593955-63.990918h490.530377l42.593954 63.990918h95.986377v-63.990918h31.995458a95.986376 95.986376 0 0 0 95.986377-95.986376v-575.918258a95.706416 95.706416 0 0 0-95.786405-95.986376z m-143.979564 623.911446s0 15.997729-335.952318 15.997729c-303.956858 0-303.956858-15.997729-303.956858-15.997729s-15.997729 0-15.997729-239.965941 15.997729-239.965941 15.997729-239.965941 0-15.997729 303.956858-15.997729c335.952317 0 335.952317 15.997729 335.952318 15.997729s15.997729 0 15.997729 239.965941-15.997729 239.965941-15.997729 239.965941z m143.979564-199.971617a23.996594 23.996594 0 0 1-23.996594 23.996594h-15.997729a23.996594 23.996594 0 0 1-23.996595-23.996594v-15.99773a23.996594 23.996594 0 0 1 23.996595-23.996594h15.997729a23.996594 23.996594 0 0 1 23.996594 23.996594z m0-127.981835a23.996594 23.996594 0 0 1-23.996594 23.996594h-15.997729a23.996594 23.996594 0 0 1-23.996595-23.996594v-15.99773a23.996594 23.996594 0 0 1 23.996595-23.996594h15.997729a23.996594 23.996594 0 0 1 23.996594 23.996594z"  ></path></symbol><symbol id="icon-twitter" viewBox="0 0 1024 1024"><path d="M918.74 303.432c0.65 9.096 0.65 18.194 0.65 27.29 0 277.44-211.166 597.116-597.116 597.116-118.904 0-229.36-34.438-322.274-94.212 16.894 1.948 33.136 2.598 50.68 2.598 98.11 0 188.426-33.136 260.548-89.664-92.264-1.95-169.584-62.376-196.224-145.544 12.996 1.948 25.99 3.248 39.636 3.248 18.842 0 37.686-2.6 55.228-7.146-96.162-19.494-168.286-103.96-168.286-205.97v-2.598c27.938 15.594 60.428 25.34 94.862 26.638-56.528-37.686-93.562-102.01-93.562-174.782 0-38.984 10.394-74.72 28.588-105.908 103.31 127.35 258.6 210.516 432.73 219.614-3.248-15.594-5.198-31.836-5.198-48.08 0-115.656 93.564-209.868 209.868-209.868 60.426 0 115.004 25.34 153.34 66.274 47.43-9.096 92.912-26.64 133.198-50.68-15.596 48.732-48.732 89.666-92.264 115.654 42.234-4.546 83.168-16.244 120.852-32.486-28.584 41.582-64.322 78.616-105.256 108.506z"  ></path></symbol><symbol id="icon-bars" viewBox="0 0 1024 1024"><path d="M96 576h832a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32z" opacity=".4" ></path><path d="M928 768H96a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32z m0-640H96A32 32 0 0 0 64 160v64a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z"  ></path></symbol><symbol id="icon-chevron-double-left" viewBox="0 0 1024 1024"><path d="M453.12 478l388-388a47.68 47.68 0 0 1 67.46-0.2l0.2 0.2L954 135.4a48.12 48.12 0 0 1 0 67.7L646.72 512l307.16 308.9a47.74 47.74 0 0 1 0.2 67.5l-0.2 0.2-45.3 45.4a47.68 47.68 0 0 1-67.46 0.2l-0.2-0.2-387.8-388a48.34 48.34 0 0 1 0-68z" opacity=".4" ></path><path d="M70 478L458 90a47.68 47.68 0 0 1 67.46-0.2l0.2 0.2 45.22 45.4a47.74 47.74 0 0 1 0.2 67.5l-0.2 0.2L263.52 512l307.36 308.9a48.12 48.12 0 0 1 0 67.7L525.58 934a47.68 47.68 0 0 1-67.46 0.2l-0.2-0.2L70 546a48.34 48.34 0 0 1 0-68z"  ></path></symbol><symbol id="icon-chevron-left" viewBox="0 0 1024 1024"><path d="M763.18 820.8a47.86 47.86 0 0 1 0 67.68l-45.4 45.3a48 48 0 0 1-67.88 0l-308.62-308L454.84 512z" opacity=".4" ></path><path d="M717.7 90.12l45.4 45.3a47.86 47.86 0 0 1 0 67.68L341.16 625.8l-80-80a47.88 47.88 0 0 1 0-67.68l388.66-388a48 48 0 0 1 67.88 0z"  ></path></symbol><symbol id="icon-chevron-double-right" viewBox="0 0 1024 1024"><path d="M571.2 546L181.58 934a48 48 0 0 1-67.76 0.2l-0.2-0.2-45.48-45.4a48 48 0 0 1 0-67.7L376.78 512 68.14 203.1A47.6 47.6 0 0 1 68 135.6l0.22-0.2L113.62 90a48 48 0 0 1 67.76-0.2l0.2 0.2L571.2 478a48.18 48.18 0 0 1 0 68z" opacity=".4" ></path><path d="M956 546L566.38 934a48 48 0 0 1-67.74 0.2l-0.2-0.2-45.5-45.4a47.62 47.62 0 0 1-0.2-67.5l0.2-0.2L761.6 512 452.94 203.1a48 48 0 0 1 0-67.7L498.44 90a48 48 0 0 1 67.74-0.2 1.88 1.88 0 0 1 0.2 0.2L956 478a48.18 48.18 0 0 1 0 68z"  ></path></symbol><symbol id="icon-chevron-right" viewBox="0 0 1024 1024"><path d="M569.48 512l113.56 113.78L374.42 933.8a48 48 0 0 1-67.88 0l-45.4-45.3a47.86 47.86 0 0 1 0-67.68z" opacity=".4" ></path><path d="M374.5 90.12l388.66 388a47.86 47.86 0 0 1 0 67.68l-80 80-422-422.68a47.84 47.84 0 0 1 0-67.68l45.4-45.3a48 48 0 0 1 67.94-0.02z"  ></path></symbol><symbol id="icon-calendar-day" viewBox="0 0 1024 1024"><path d="M64 384v544a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V384z m384 352a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z m224-480h64a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32z m-384 0h64a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32z" opacity=".4" ></path><path d="M960 224v160H64v-160a96 96 0 0 1 96-96h96v96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32V128h256v96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32V128h96a96 96 0 0 1 96 96z"  ></path></symbol><symbol id="icon-clock" viewBox="0 0 1024 1024"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m184.98 626l-40 50a32 32 0 0 1-44.98 5l-134-99.44a80 80 0 0 1-30-62.46V224a32 32 0 0 1 32-32h64a32 32 0 0 1 32 32v288l116 85a32 32 0 0 1 4.98 45z" opacity=".4" ></path><path d="M696.98 642l-40 50a32 32 0 0 1-44.98 5l-134-99.44a80 80 0 0 1-30-62.46V224a32 32 0 0 1 32-32h64a32 32 0 0 1 32 32v288l116 85a32 32 0 0 1 4.98 45z"  ></path></symbol><symbol id="icon-hashtag" viewBox="0 0 1024 1024"><path d="M468.92 64.38a23 23 0 0 0-4.22-0.38h-81.26a24 24 0 0 0-23.62 19.78L329.06 256h130l29.24-163.78a24 24 0 0 0-19.38-27.84zM208.38 931.78a24 24 0 0 0 19.4 27.84A23 23 0 0 0 232 960h81.28a24 24 0 0 0 23.62-19.78L436.22 384h-130z m327.3 0a24 24 0 0 0 19.4 27.84 23 23 0 0 0 4.22 0.38h81.26a24 24 0 0 0 23.64-19.78L694.94 768h-130z m260.54-867.4A23 23 0 0 0 792 64h-81.26a24 24 0 0 0-23.64 19.78L587.78 640h130l97.84-547.78a24 24 0 0 0-19.4-27.84z" opacity=".4" ></path><path d="M152.36 383.62a23 23 0 0 0 4.22 0.38H634l22-128H170.86a24 24 0 0 0-23.62 19.78l-14.28 80a24 24 0 0 0 19.4 27.84zM78.66 659.78l-14.28 80a24 24 0 0 0 19.4 27.84A23 23 0 0 0 88 768h150l22-128H102.3a24 24 0 0 0-23.64 19.78z m861.56-403.4A23 23 0 0 0 936 256h-150l-22 128h157.7a24 24 0 0 0 23.64-19.78l14.28-80a24 24 0 0 0-19.4-27.84z m-68.58 384a23 23 0 0 0-4.22-0.38H390l-22 128h485.14a24 24 0 0 0 23.62-19.78l14.28-80a24 24 0 0 0-19.4-27.84z"  ></path></symbol><symbol id="icon-rss" viewBox="0 0 1024 1024"><path d="M671.47223 926.42c-16.7-309.2-264.36-557.18-573.9-573.9A32 32 0 0 0 63.99223 384.5v96.14a32 32 0 0 0 29.78 32c223.66 14.56 402.94 193.4 417.54 417.54a32 32 0 0 0 32 29.78h96.14a32 32 0 0 0 32-33.58zM96.99223 64A32 32 0 0 0 63.99223 96v96.16a32 32 0 0 0 30.9 32c382.36 15.68 689.26 322.64 704.94 704.94a32 32 0 0 0 32 30.9H927.99223a32 32 0 0 0 32-33C943.19223 459.36 566.91223 80.9 96.99223 64z" opacity=".4" ></path><path d="M63.99223 832a128 128 0 1 1 128 128 128 128 0 0 1-128-128z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M415.995413 159.984236a255.974777 255.974777 0 1 1-181.002165 74.972612A254.274945 254.274945 0 0 1 415.995413 159.984236m0-159.984236C186.258051 0 0.0364 186.221651 0.0364 415.959013s186.221651 415.959013 415.959013 415.959014 415.959013-186.221651 415.959014-415.959014S645.732776 0 415.995413 0z" opacity=".4" ></path><path d="M1009.736909 953.306066L953.142486 1009.900489a47.79529 47.79529 0 0 1-67.79332 0L685.968812 810.520135a47.995271 47.995271 0 0 1-13.998621-33.99665V743.926697l71.992906-71.992906h32.596788a47.995271 47.995271 0 0 1 33.99665 13.998621l199.380354 199.380354a48.215249 48.215249 0 0 1-0.19998 67.9933z"  ></path></symbol><symbol id="icon-adjust" viewBox="0 0 1024 1024"><path d="M1008 512c0 274-222 496-496 496V16c274 0 496 222 496 496z" opacity=".4" ></path><path d="M512 16v992C238 1008 16 786 16 512S238 16 512 16z"  ></path></symbol></svg>',
    d = (t = document.getElementsByTagName('script'))[t.length - 1].getAttribute('data-injectcss');
  if (d && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (a) {
      console && console.log(a);
    }
  }
  function s() {
    i || ((i = !0), h());
  }
  (o = function () {
    var a,
      t,
      o,
      e,
      h,
      l = document.createElement('div');
    (l.innerHTML = n),
      (n = null),
      (a = l.getElementsByTagName('svg')[0]) &&
        (a.setAttribute('aria-hidden', 'true'),
        (a.style.position = 'absolute'),
        (a.style.width = 0),
        (a.style.height = 0),
        (a.style.overflow = 'hidden'),
        (t = a),
        (o = document.body).firstChild
          ? ((e = t), (h = o.firstChild).parentNode.insertBefore(e, h))
          : o.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(o, 0)
        : ((e = function () {
            document.removeEventListener('DOMContentLoaded', e, !1), o();
          }),
          document.addEventListener('DOMContentLoaded', e, !1))
      : document.attachEvent &&
        ((h = o),
        (l = a.document),
        (i = !1),
        (c = function () {
          try {
            l.documentElement.doScroll('left');
          } catch (a) {
            return void setTimeout(c, 50);
          }
          s();
        })(),
        (l.onreadystatechange = function () {
          'complete' == l.readyState && ((l.onreadystatechange = null), s());
        }));
}
