import { v4 as uuidv4 } from 'uuid';

const generatedId = (): string => {
  return uuidv4();
}

export default generatedId;