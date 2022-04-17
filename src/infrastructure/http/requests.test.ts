import axios from 'axios';
import { Advisor } from "../../models/Advisor";
import { getAdvisors } from "./requests";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('requests.ts', () => {
    describe('getAdvisors', () => {
        it('Returns right value', async () => {
            const advisors: Advisor[] = [
                {
                    id: 'id',
                    reviews: [],
                    status: 'offline',
                    lang: 'de',
                    firstName: 'John',
                    lastName: 'doe',
                }
            ];

            mockedAxios.get.mockResolvedValueOnce({ data: advisors });
            const result = await getAdvisors();

            expect(result).toBe(advisors);
        })
    })
});