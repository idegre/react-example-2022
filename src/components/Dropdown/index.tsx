import React from 'react';
import { DropdownContainer } from './styled';
import { useDispatch } from 'react-redux';
import { setSelection } from '/src/store/selection/slices';

type Props<O> = {
    title: string
    options?: O[]
    disabled?: boolean
    optToString?: (opt: O) => string;
}

const genericGetString = <O = string>(opt: O) => opt as unknown as string;

export const Dropdown = <O  = string>({title, options = [], optToString = genericGetString<O>}: Props<O>) => {
	const dispatch = useDispatch();
	return <>
		<DropdownContainer>
			<select onChange={(e) => dispatch(setSelection({field: title, value: e.target.value}))}>
				{options.map(o => <option key={optToString(o)}>{optToString(o)}</option>)}
			</select>
		</DropdownContainer>
	</>;
};