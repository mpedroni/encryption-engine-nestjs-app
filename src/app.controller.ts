import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EncryptionDto } from './dtos/encryption.dto';
import { EncryptionInterface } from './interfaces/encryption.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('encrypt')
  encrypt(@Body() encryptDto: EncryptionDto): EncryptionInterface {
    return this.appService.encrypt(encryptDto.text);
  }

  @Post('decrypt')
  decrypt(@Body() encryptedText: EncryptionDto): EncryptionInterface {
    return this.appService.decrypt(encryptedText.text);
  }
}
