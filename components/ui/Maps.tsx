// https://www.google.com/maps/search/?api=1&query=17.421188,78.5892182

import Link from 'next/link';
import { ReactElement } from 'react';

const MapsLink = ({
  latitude,
  longitude,
  locationName = 'Sriramana event planner',
  children,
}: {
  latitude: number;
  longitude: number;
  locationName?: string;
  children: ReactElement;
}) => (
  <Link
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      locationName,
    )}@${latitude},${longitude}`}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </Link>
);

export default MapsLink;
