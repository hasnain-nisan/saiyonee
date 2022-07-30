import React from 'react'

const Banner = ({type}) => {
    if(type === "splashScreen"){
        return (
          <svg
            width="390"
            height="374"
            viewBox="0 0 390 374"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_437_4742"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="-11"
              width="390"
              height="385"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M390 -11H0V291V294.482C27.6845 340.736 104.532 374 195 374C285.468 374 362.316 340.736 390 294.482V291V-11Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_437_4742)">
              <rect width="390" height="374" fill="#FFB7AC" />
              <path d="M390 0L0 374V0H390Z" fill="url(#paint0_linear_437_4742)" />
            </g>
            <path
              d="M83 98L86.1432 107.674H96.3148L88.0858 113.652L91.229 123.326L83 117.348L74.771 123.326L77.9142 113.652L69.6852 107.674H79.8568L83 98Z"
              fill="#FFD9D9"
            />
            <path
              d="M332.5 169L335.755 179.019L346.29 179.019L337.767 185.211L341.023 195.231L332.5 189.039L323.977 195.231L327.233 185.211L318.71 179.019L329.245 179.019L332.5 169Z"
              fill="#FFD9D9"
            />
            <path
              d="M225.5 258L227.857 265.601H235.486L229.314 270.298L231.672 277.899L225.5 273.202L219.328 277.899L221.686 270.298L215.514 265.601H223.143L225.5 258Z"
              fill="#FFD9D9"
            />
            <path
              d="M255.5 69L257.857 76.6008H265.486L259.314 81.2984L261.672 88.8992L255.5 84.2016L249.328 88.8992L251.686 81.2984L245.514 76.6008H253.143L255.5 69Z"
              fill="#FFD9D9"
            />
            <path
              d="M68.5 269L70.8574 276.601H78.4861L72.3143 281.298L74.6717 288.899L68.5 284.202L62.3283 288.899L64.6857 281.298L58.5139 276.601H66.1426L68.5 269Z"
              fill="#FFD9D9"
            />
            <path
              d="M276 265L276.898 267.764H279.804L277.453 269.472L278.351 272.236L276 270.528L273.649 272.236L274.547 269.472L272.196 267.764H275.102L276 265Z"
              fill="#FFA2A2"
            />
            <path
              d="M104 175L104.898 177.764H107.804L105.453 179.472L106.351 182.236L104 180.528L101.649 182.236L102.547 179.472L100.196 177.764H103.102L104 175Z"
              fill="#FFA2A2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_437_4742"
                x1="358"
                y1="52.6761"
                x2="186.717"
                y2="42.3474"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.11" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        );
    } else if (type === "congrats") {
      return (
        <svg
          width="390"
          height="374"
          viewBox="0 0 390 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_419_4760"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-11"
            width="390"
            height="385"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M390 -11H0V291V294.482C27.6845 340.736 104.532 374 195 374C285.468 374 362.316 340.736 390 294.482V291V-11Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_419_4760)">
            <rect width="390" height="374" fill="#FFB7AC" />
            <path d="M390 0L0 374V0H390Z" fill="url(#paint0_linear_419_4760)" />
          </g>
          <rect x="143" y="135" width="104" height="104" rx="52" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M189.302 203C188.566 203 187.862 202.696 187.358 202.16L174.39 188.349C173.38 187.277 173.436 185.589 174.508 184.581C175.582 183.573 177.27 183.627 178.276 184.699L189.276 196.408L211.697 171.869C212.694 170.779 214.38 170.707 215.468 171.699C216.553 172.691 216.628 174.379 215.636 175.464L191.27 202.131C190.772 202.68 190.062 202.995 189.321 203H189.302Z"
            fill="#FFB7AC"
          />
          <path
            d="M102 111L104.694 119.292H113.413L106.359 124.416L109.053 132.708L102 127.584L94.9466 132.708L97.6407 124.416L90.5873 119.292H99.3058L102 111Z"
            fill="white"
          />
          <path
            d="M312 171L314.694 179.292H323.413L316.359 184.416L319.053 192.708L312 187.584L304.947 192.708L307.641 184.416L300.587 179.292H309.306L312 171Z"
            fill="white"
          />
          <path
            d="M222 246L224.021 252.219H230.56L225.269 256.062L227.29 262.281L222 258.438L216.71 262.281L218.731 256.062L213.44 252.219H219.979L222 246Z"
            fill="white"
          />
          <path
            d="M247 87L249.021 93.2188H255.56L250.269 97.0623L252.29 103.281L247 99.4377L241.71 103.281L243.731 97.0623L238.44 93.2188H244.979L247 87Z"
            fill="white"
          />
          <path
            d="M90 255L92.0206 261.219H98.5595L93.2694 265.062L95.2901 271.281L90 267.438L84.7099 271.281L86.7306 265.062L81.4405 261.219H87.9794L90 255Z"
            fill="white"
          />
          <path
            d="M276 265L276.898 267.764H279.804L277.453 269.472L278.351 272.236L276 270.528L273.649 272.236L274.547 269.472L272.196 267.764H275.102L276 265Z"
            fill="white"
          />
          <path
            d="M104 175L104.898 177.764H107.804L105.453 179.472L106.351 182.236L104 180.528L101.649 182.236L102.547 179.472L100.196 177.764H103.102L104 175Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_419_4760"
              x1="358"
              y1="52.6761"
              x2="186.717"
              y2="42.3474"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.11" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg
          width="390"
          height="400"
          viewBox="0 0 390 400"
          fill="none"
          style={{ position: "absolute" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_331_3259"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="390"
            height="385"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M390 0H0V302V305.482C27.6845 351.736 104.532 385 195 385C285.468 385 362.316 351.736 390 305.482V302V0Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_331_3259)">
            <rect y="11" width="390" height="374" fill="#FFB7AC" />
            <path
              d="M390 11L0 385V11H390Z"
              fill="url(#paint0_linear_331_3259)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_331_3259"
              x1="358"
              y1="63.6761"
              x2="186.717"
              y2="53.3474"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.11" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
}

export default Banner