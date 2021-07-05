import './style.css';
import { CountdownTimer } from './plugin';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

