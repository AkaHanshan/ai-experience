import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MessageIncomingDto {
  @ApiPropertyOptional()
  text?: string;

  @ApiProperty()
  target: string;
}

export class MessageOutgoingDto {
  @ApiProperty()
  code: number;

  @ApiProperty()
  message: string | null;

  @ApiProperty()
  data: Data;

  @ApiProperty()
  total: number;
  @ApiProperty()
  notOk: boolean;
  @ApiProperty()
  ok: boolean;
}

interface Data {
  message: string;
}
