import axios from "axios";

import { vars } from '../env';

export default axios.create({
  baseURL: vars.baseUrl
})