import './bar.css';
import Barchart from './barchart';


const Bar = (props) =>{
    
    const datapointstore =props.datapoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...datapointstore);

    return (<div className='chart'>
          {props.datapoints.map((datapoint) =>(
              <Barchart
              key={datapoint.label}
              value={datapoint.value}
              maxvalue={totalMaximum}
              label={datapoint.label}
              />
          ))};
          
    </div>
    );
};

export default Bar;