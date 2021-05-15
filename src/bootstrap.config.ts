import { History, Location } from 'history';

export interface MountReturn {
  onHostNavigate: (params: { pathname: string }) => void;
}

export interface MountParameters {
  onRemoteNavigate: (location: Location) => void;
  initialPath: string;
  defaultHistory?: History<unknown>;
}
