import { TimeOffRaison } from './time-off-raison';
import { User } from './user';

export enum StatuRequest {
  Accepted = 'Accepted',
  Canceled = 'Canceled',
  Declined = 'Declined',
  InProcess = 'InProcess',
  WaintingForTM = 'WaintingForTM',
  WaitedForDG = 'WaitedForDG'
}

export class RequestTimeOff {
  idRequestTimeOff!: number;
  startDate!: Date;
  duration!: number;
  statuRequest!: StatuRequest;
  user!: User;
  timeOffRaison!: TimeOffRaison;
}
