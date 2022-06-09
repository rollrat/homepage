import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as iconv from 'iconv-lite';

type FxInfoType = {
  통화명: string;
  현찰파실때: string;
  현찰사실때: string;
};

function getPriceFromFxInfo(fxInfo: FxInfoType): string {
  const sellPrice = parseFloat(fxInfo['현찰파실때']);
  const buyPrice = parseFloat(fxInfo['현찰사실때']);

  return ((sellPrice + buyPrice) / 2).toFixed(1);
}

@Injectable()
export class FxService {
  async getFxInfo(): Promise<[FxInfoType]> {
    const res = await axios.get('http://fx.kebhana.com/FER1101M.web', {
      responseType: 'arraybuffer',
    });
    let data = iconv.decode(res.data, 'EUC-KR');
    data = data.substring(data.indexOf('{')).replace(/},\s+]\s+}/i, '}]}');
    return JSON.parse(data)['리스트'];
  }

  async getAvailableCurrencyList(): Promise<string[]> {
    const fxInfo = await this.getFxInfo();

    return fxInfo.map((x) =>
      x.통화명.substring(x.통화명.lastIndexOf(' ') + 1).toLowerCase(),
    );
  }

  async getFxInfoByCurrency(cur: string): Promise<string> {
    const fxInfo = await this.getFxInfo();
    const curInfo = fxInfo.filter((x) =>
      x['통화명'].endsWith(cur.toUpperCase()),
    );

    if (curInfo.length == 0) return '';

    return getPriceFromFxInfo(curInfo[0]);
  }

  async getAllCurrencyPrice() {
    const fxInfo = await this.getFxInfo();

    return fxInfo.map((x) => ({
      name: x.통화명.substring(x.통화명.lastIndexOf(' ') + 1).toLowerCase(),
      price: getPriceFromFxInfo(x),
    }));
  }
}
