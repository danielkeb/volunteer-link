import { IsBoolean, IsEnum } from 'class-validator';

export class NotificationOptionDto {
  @IsEnum({
    task_assigned: 'task_assigned',
    new_project_recommendation: 'new_project_recommendation',
    project_status_update: 'project_status_update',
    deadlines: 'deadlines',
    application_status_update: 'application_status_update',
    badge_and_certificate: 'badge_and_certificate',
  })
  option: string;

  @IsBoolean()
  value: boolean;
}
