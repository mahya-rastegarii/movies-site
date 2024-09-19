
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './rangeInput.css';


function RangeInput({min, max, sliderValue, handleSliderChange, step}) {

    return (
        <div className='w-full relative'>
          <Slider className='w-full absolute'
            min={min}
            max={max}
            step={step}
            range
            reverse
            value={sliderValue}
            //  defaultValue={sliderValue}
             onChange={handleSliderChange}
            
          />
        </div>
      );
}

export default RangeInput;