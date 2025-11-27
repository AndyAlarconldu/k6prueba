import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 },   // sube a 50 usuarios
    { duration: '3m', target: 120 },  // mantiene 120 usuarios
    { duration: '2m', target: 200 },  // sube a 200 usuarios
    { duration: '1m', target: 0 },    // baja a 0
  ],
};

const URL = 'http://LB-1345017927.us-east-1.elb.amazonaws.com';

export default function () {
  http.get(URL);
  sleep(0.05); // menos espera -> más peticiones
}

