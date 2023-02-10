export const PreviewIcon = () => {
  return (
    <svg width="250px" height="250px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#f80" />
          <stop offset="1" stopColor="#db2903" />
        </linearGradient>
        <clipPath id="clip-Weather">
          <rect width="48" height="48" />
        </clipPath>
      </defs>
      <g id="Weather" clipPath="url(#clip-Weather)">
        <rect width="48" height="48" fill="rgba(255,255,255,0)" />
        <g id="Weather-2" data-name="Weather" transform="translate(5 8)">
          <g
            id="Icon"
            transform="translate(14)"
            stroke="rgba(255,255,255,0.3)"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            fill="url(#linear-gradient)">
            <rect width="24" height="24" rx="12" stroke="none" />
            <rect x="0.25" y="0.25" width="23.5" height="23.5" rx="11.75" fill="none" />
          </g>
          <g
            id="Icon-2"
            data-name="Icon"
            transform="translate(0 10)"
            fill="rgba(255,169,125,0.7)"
            strokeMiterlimit="10">
            <path
              d="M7,21A7,7,0,0,1,6,7.071V7A7,7,0,0,1,19.128,3.614a7.007,7.007,0,0,1,9.393,3.837A7,7,0,1,1,31,21Z"
              stroke="none"
            />
            <path
              d="M 31 20.5 C 34.58411026000977 20.5 37.5 17.58411026000977 37.5 14 C 37.5 10.41588973999023 34.58411026000977 7.5 31 7.5 C 30.20731925964355 7.5 29.43293952941895 7.640900135040283 28.6983699798584 7.918779850006104 L 28.23591995239258 8.093720436096191 L 28.05581092834473 7.63325023651123 C 27.58473014831543 6.42887020111084 26.77205085754395 5.40038013458252 25.70564079284668 4.658999919891357 C 24.61502075195313 3.900769948959351 23.33362007141113 3.5 22 3.5 C 21.07080078125 3.5 20.17362976074219 3.691800117492676 19.33340072631836 4.070079803466797 L 18.9136791229248 4.259049892425537 L 18.69071006774902 3.856359958648682 C 17.54442977905273 1.786080002784729 15.3638801574707 0.5 13 0.5 C 9.416983604431152 0.5 6.50178050994873 3.414060592651367 6.500001430511475 6.996668815612793 L 6.500939846038818 7.06374979019165 L 6.507090091705322 7.503509998321533 L 6.071720123291016 7.565720081329346 C 4.538670063018799 7.784780025482178 3.129790067672729 8.551179885864258 2.104619979858398 9.723719596862793 C 1.069869995117188 10.90723991394043 0.5 12.42591953277588 0.5 14 C 0.5 17.58411026000977 3.415889978408813 20.5 7 20.5 L 31 20.5 M 31 21 L 7 21 C 3.134010076522827 21 0 17.86598968505859 0 14 C 0 10.47317981719971 2.608220100402832 7.555550098419189 6.00098991394043 7.07075023651123 L 6 7 C 6 3.134010076522827 9.134010314941406 0 13 0 C 15.63784027099609 0 17.93489074707031 1.459059953689575 19.12813949584961 3.614160060882568 C 20.00445938110352 3.219630002975464 20.9765796661377 3 22 3 C 24.9666805267334 3 27.50230979919434 4.84552001953125 28.52145957946777 7.451119899749756 C 29.29174041748047 7.159729957580566 30.12722015380859 7 31 7 C 34.86598968505859 7 38 10.13401031494141 38 14 C 38 17.86598968505859 34.86598968505859 21 31 21 Z"
              stroke="none"
              fill="rgba(255,255,255,0.3)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};