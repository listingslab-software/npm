import React from "react"
const Cannastore = props => {

    const { color } = props
    let c = `#000000`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 355 329" >
                
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill={c} fillRule="nonzero">
                        <path d="M268.916897,242.660295 C296.598712,232.668853 326.048988,229.045275 355,231.995182 C334.46426,253.265402 309.251782,269.711118 281.308031,279.958587 C270.414691,283.956604 259.165754,287.000122 247.866017,289.003531 C233.978675,291.475789 219.972272,292.413487 206,291.834227 C229.047145,278.389624 250.124218,261.910304 268.916897,242.660295 Z"></path>
                        <path d="M336,70 C329.98391,114.452229 313.385099,157.115999 287.551021,194.221948 C278.81314,206.771379 269.055972,218.642483 258.540466,229.497292 C240.526198,248.164381 220.236127,264.077609 198,277 C213.41979,244.325834 223.202262,209.110133 226.934642,172.970381 C229.97669,167.970807 233.195077,163.030875 236.506773,158.277026 C262.340851,121.171872 296.524548,90.8873548 336,70 Z"></path>
                        <path d="M291,327.794651 C274.269997,330.131657 257.123792,329.070404 240.63969,324.610089 C227.94596,321.177285 215.930248,315.793092 205,308.739495 C207.96752,308.868034 210.94459,308.936321 213.920865,308.936321 C225.580061,308.936321 237.248011,307.952191 248.839564,306 C264.179313,310.553507 278.492486,317.975851 291,327.794651 Z"></path>
                        <path d="M177,0 C199.282338,42.9910206 211,91.0639728 211,139.978463 C211,188.918479 199.282338,237.008979 177,280 C154.717662,237.008979 143,188.919276 143,139.978463 C143,91.0639728 154.717662,42.9902229 177,0 Z"></path>
                        <path d="M141.072912,308.935535 C144.048608,308.935535 147.024304,308.867267 150,308.738762 C139.063124,315.799306 127.04179,321.182058 114.350526,324.613943 C97.8608739,329.072262 80.7187965,330.134035 64,327.788819 C76.5138358,317.963812 90.8409366,310.544257 106.177705,306 C117.758255,307.950866 129.415186,308.935535 141.072912,308.935535 Z"></path>
                        <path d="M149,291.833063 C135.026835,292.413196 121.036999,291.483383 107.16544,289.010814 C107.114637,289.002012 107.063834,288.99401 107.005093,288.985208 C95.7641684,286.981548 84.5565832,283.94645 73.6966799,279.964735 C45.7503489,269.715979 20.5362588,253.268998 0,231.995307 C28.935399,229.045029 58.3708885,232.669062 86.0886067,242.661759 C104.889631,261.930989 125.968051,278.403576 149,291.833063 Z"></path>
                        <path d="M128.058318,172.962029 C131.790484,209.109872 141.572396,244.317757 157,277 C134.773845,264.07756 114.477029,248.16427 96.4463977,229.480409 C85.9401923,218.634307 76.183583,206.763157 67.4462029,194.20493 C41.6136048,157.107586 25.0157455,114.443652 19,70 C58.4731902,90.887435 92.663626,121.172069 118.487526,158.268618 C121.798242,163.022485 125.008537,167.962436 128.058318,172.962029 Z"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
}
export default Cannastore