import { IsEnum, IsUrl } from 'class-validator';

export class SocialLinkDto {
  @IsEnum({
    LINKEDIN: 'LinkedIn',
    GITHUB: 'GitHub',
    BEHANCE: 'Behance',
    DRIBBBLE: 'Dribbble',
    INSTAGRAM: 'Instagram',
    WEBSITE: 'Website',
  })
  platform: string;

  @IsUrl()
  url: string;
}
