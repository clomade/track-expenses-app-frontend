import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWalletApiResponse, IWalletPayload, IWalletTransactionApiResponse } from './domains.wallets.types';
import { HttpClient } from '@angular/common/http';
import { API_WALLETS_URL } from './domains.wallets.constants';
import { fakeRequest } from 'src/app/common/http/common.http.fake-request';
import { WALLET_TRANSACTIONS_API_RESPONSE_MOCK } from './domains.wallets.mocks';

@Injectable({
  providedIn: 'root',
})
export class DomainsWalletsGateway {
  public constructor(
      private readonly http: HttpClient,
  ) {
  }

  public getWallets(): Observable<IWalletApiResponse[]> {
    return this.http.get<IWalletApiResponse[]>(API_WALLETS_URL);
  }

  public createWallet({ name }: IWalletPayload): Observable<IWalletApiResponse> {
    return this.http.post<IWalletApiResponse>(API_WALLETS_URL, { name });
  }

  public updateWallet(id: number, { name }: IWalletPayload): Observable<IWalletApiResponse> {
    return this.http.patch<IWalletApiResponse>(`${API_WALLETS_URL}/${id}`, { name });
  }

  public deleteWallet(id: number): Observable<unknown> {
    return this.http.delete(`${API_WALLETS_URL}/${id}`);
  }

  public getWalletTransactions(id: number): Observable<IWalletTransactionApiResponse[]> {
    return fakeRequest(WALLET_TRANSACTIONS_API_RESPONSE_MOCK(id));
  }
}
