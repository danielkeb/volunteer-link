import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gamil',
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.PASSWORD,
        },
      },
      defaults: {
        from: `"No Reply" ${process.env.SENDER_EMAIL}`,
      },
      template: {
        dir: join(process.cwd(), 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
