import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    const isDatabaseHealthy = true;
    if (!isDatabaseHealthy) {
      throw new HttpException(
        'Database not healthy',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    return { status: 'ok' };
  }
}
