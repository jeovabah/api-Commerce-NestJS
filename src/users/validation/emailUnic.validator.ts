import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidatorConstraint,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userWithEmail = await this.userRepository.existUserWithEmail(value);
    return !userWithEmail;
  }
}

export const EmailUnic = (optionsValidation: ValidationOptions) => {
  return (object: Object, props: string) => {
    registerDecorator({
      target: Object.constructor,
      propertyName: props,
      options: optionsValidation,
      constraints: [],
      validator: EmailUnicValidator,
    });
  };
};
