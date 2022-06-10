import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { Typography } from '../Typhograpy';
import { Card, Details } from './styled';
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';

type Props = {
    car: trafficMeister.Car
}

export const CarCard = ({car}: Props) => {
	const [imageError, setImageError] = useState<boolean>(false);
	const handleImageError = useCallback(() => setImageError(true), [setImageError]);

	return <Card>
		{imageError 
			? <Details>
				<FontAwesomeIcon icon={faEyeLowVision} size='3x' color='white' />
				<Typography>No Image</Typography>
			</Details>
			: <img src={car.img} onError={handleImageError}/>}
		<Details>
			<Typography>{car.brand}</Typography>
			<Typography>{car.type}</Typography>
		</Details>
	</Card>;
};