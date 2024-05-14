import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { MessageOutgoingDto } from './message.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessageService {
  private baseUrl: string;
  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('AI_BACKEND_URL');
  }

  async getMessage(dto: any): Promise<any> {
    console.log('baseUrl ', this.baseUrl);

    const response = await lastValueFrom(
      this.http.post<MessageOutgoingDto>(
        `${this.baseUrl}/aigc202401/getV1Answer`,
        dto,
      ),
    );
    return response.data;
  }
}
