import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { MESSEGES_HELPER } from '../../helpers/messeges.helper';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);
    if (!user)
      throw new UnauthorizedException(
        MESSEGES_HELPER.PASSWORD_OR_EMAIL_INVALID,
      );

    return user;
  }
}
