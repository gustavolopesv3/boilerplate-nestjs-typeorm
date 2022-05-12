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
    };
    return {
      user: {
        id: user.id,
        fullName: user.name,
        email: user.email,
        role: user.role,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
