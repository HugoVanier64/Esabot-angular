import { Injectable } from '@angular/core';
import { Sabot } from './sabot';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class SabotService {
  private apiUrl = '/api/sabots';

  constructor(private http: HttpClient) { }

  async findAll(): Promise<Array<Sabot>> {
    try {
      const response = await this.http.get<Array<Sabot>>(this.apiUrl).toPromise();
      return response ?? [];
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }

  async createSabot(sabot: Sabot): Promise<Array<Sabot>> {
    try {
      const sabotHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      const response = await this.http.post<Array<Sabot>>(this.apiUrl, JSON.stringify(sabot), {headers : sabotHeaders}).toPromise();
      return response ?? [];
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }

  async deleteSabot(id: number): Promise<Array<Sabot>> {
    try {
      const url = `${this.apiUrl}/${id}`;
      const response = await this.http.delete<Array<Sabot>>(url).toPromise();
      return response ?? [];
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }

  private handleError(error: any) {
    console.error("An error has occurred", error);
    throw error;
  }
}
