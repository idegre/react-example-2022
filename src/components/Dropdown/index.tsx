import React, { useMemo } from 'react';
import { DropdownContainer } from './styled';
import { useDispatch } from 'react-redux';
import { setSelection } from '/src/store/selection/slices';

type Props = {
    title: string
    options?: string[]
    disabled?: boolean
}

export const Dropdown = ({title, options = []}: Props) => {
	const dispatch = useDispatch();
	const fullOptions = useMemo(() => ['No Selection', ...options],[options]);
	return <>
		<DropdownContainer>
			<select onChange={(e) => dispatch(setSelection({field: title, value: e.target.value}))}>
				{fullOptions.map(o => <option key={o}>{o}</option>)}
			</select>
		</DropdownContainer>
	</>;
};