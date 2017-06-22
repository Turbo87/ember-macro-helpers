import expandProperty from './expand-property';
import {
  ARRAY_EACH,
  ARRAY_LENGTH
} from './-constants';

export default function(property) {
  if (typeof property !== 'string') {
    return [property];
  }

  let atEachIndex = property.indexOf(ARRAY_EACH);
  if (atEachIndex !== -1) {
    return [property.slice(0, atEachIndex)];
  } else if (property.slice(-3) === ARRAY_LENGTH) {
    return [property.slice(0, -3)];
  }

  return expandProperty(property);
}
