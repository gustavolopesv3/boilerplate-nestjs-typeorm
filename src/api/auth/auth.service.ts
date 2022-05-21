import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userSerive: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    let user: UserEntity;
    try {
      console.log(email, password);
      user = await this.userSerive.findOneOrFail({ email });
    } catch (error) {
      return null;
    }
    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  async login(user: UserEntity) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      avatar_url: 'https://github.com/gustavolopesv3.png',
    };
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar_url: 'https://github.com/gustavolopesv3.png',
      },
      token: this.jwtService.sign(payload),
    };
  }
}
