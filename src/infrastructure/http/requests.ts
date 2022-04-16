import { Advisor } from "../../models/Advisor";
import axios from "axios";

const API_URL = 'http://localhost:3001/api';

interface IGetAdvisorsParams {
    filter?: { [K in keyof Advisor]?: Advisor[K][] };
    sort?: [keyof Advisor, 'ASC' | 'DESC'];
}

export async function getAdvisors(params?: IGetAdvisorsParams): Promise<Advisor[]> {
    return new Promise<Advisor[]>((resolve, reject) => {
        axios.get<Advisor[]>(API_URL + '/advisors', { params })
            .then(({ data }) => {
                setTimeout(() => {
                    resolve(data);
                }, 1000);
            })
            .catch(e => reject(e));
    });
}