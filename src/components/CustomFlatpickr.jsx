import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
const CustomFlatpickr = ({
  className,
  value,
  options,
  placeholder
}) => {
  return <>
			<Flatpickr className={className} data-enable-time value={value} options={options} placeholder={placeholder} />
		</>;
};
export default CustomFlatpickr;