/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import * as PropTypes from "prop-types";
import { IMaskInput } from 'react-imask';

import { IS_MQ_MOBILE } from "../helpers/config";

const UIMaskInput = forwardRef((props, ref) => {
	const [focus, setFocus] = useState(false);

	// depending on prop above first argument is
	// `value` if `unmask=false`,
	// `unmaskedValue` if `unmask=true`,
	// `typedValue` if `unmask='typed'`
	function _onChange(value, mask) {
		if( typeof props.onChange === 'function' )
		{
			props.onChange(value, mask);
		}
	}

	const {value, className, onChange, placeholder, labelTop, labelLeft, labelFocusTop, labelFocusLeft, labelFocusSize, mobileLabelTop, mobileLabelLeft, mobileLabelFocusTop, mobileLabelFocusLeft, mobileLabelFocusSize, ...rest} = props;

	let labelClass = (!!value || focus) ? "float-label float-label-focus" : "float-label";
	let labelStyle = (!!value || focus) ? {transform: `translate3d(${labelFocusLeft}, ${labelFocusTop},0) scale(${labelFocusSize})`} : {transform: `translate3d(${labelLeft}, ${labelTop},0) scale(1)`};

	// if( IS_MQ_MOBILE )
	// {
	// 	labelStyle = (!!value || focus) ? {transform: `translate3d(${mobileLabelFocusLeft}, ${mobileLabelFocusTop},0) scale(${mobileLabelFocusSize})`} : {transform: `translate3d(${mobileLabelLeft}, ${mobileLabelTop},0) scale(1)`};
	// }

	return (
		<div
			className="float-label-wrap"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}>
			<IMaskInput
				ref={ref}
				unmask={false} // true|false|'typed'
				// DO NOT USE onChange TO HANDLE CHANGES!
				// USE onAccept INSTEAD
				onAccept={_onChange}
				className={`ant-input ${className ? className : ''}`}
				value={value}
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
});

UIMaskInput.propTypes = {
	className 			: PropTypes.string,
	onChange            : PropTypes.func,
	placeholder         : PropTypes.string,
	labelTop            : PropTypes.string,
	labelLeft           : PropTypes.string,
	labelFocusTop       : PropTypes.string,
	labelFocusLeft      : PropTypes.string,
	labelFocusSize      : PropTypes.number,
	mobileLabelTop      : PropTypes.string,
	mobileLabelLeft     : PropTypes.string,
	mobileLabelFocusTop : PropTypes.string,
	mobileLabelFocusLeft: PropTypes.string,
	mobileLabelFocusSize: PropTypes.number,
}

UIMaskInput.defaultProps = {
	placeholder         : '',
	labelTop            : '14px',
	labelLeft           : '29px',
	labelFocusTop       : '7px',
	labelFocusLeft      : '29px',
	labelFocusSize      : 0.7,
	mobileLabelTop      : '14px',
	mobileLabelLeft     : '29px',
	mobileLabelFocusTop : '7px',
	mobileLabelFocusLeft: '29px',
	mobileLabelFocusSize: 0.7,
}

export default UIMaskInput;