import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';
import { join } from 'path';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendPasswordResetCode(
    recipient: string,
    code: string,
    fullName: string,
  ) {
    try {
      const templatePath = join(
        process.cwd(),
        'templates',
        'passwordResetRequest.hbs',
      );
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        name: fullName,
        code: code,
      });

      await this.mailerService.sendMail({
        to: recipient,
        subject: `Your reset code - ${code}`,
        html: html,
      });

      return {
        message: 'Email with reset code sent',
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to send password reset code. Please try again later.',
      );
    }
  }

  async sendAccountCreatedConfirmation(recipient: string, fullName: string) {
    try {
      const templatePath = join(
        process.cwd(),
        'templates',
        'accountCreated.hbs',
      );
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        name: fullName,
      });

      await this.mailerService.sendMail({
        to: recipient,
        subject: `Welcome to VolunteerLink`,
        html: html,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to send password reset code. Please try again later.',
      );
    }
  }

  async sendPasswordChangeConfirmation(recipient: string, fullName: string) {
    try {
      const templatePath = join(
        process.cwd(),
        'templates',
        'passwordChanged.hbs',
      );
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        name: fullName,
      });

      await this.mailerService.sendMail({
        to: recipient,
        subject: `${fullName}, your password was successfully reset`,
        html: html,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to send password reset code. Please try again later.',
      );
    }
  }
}
