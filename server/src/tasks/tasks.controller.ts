import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post(':projectId')
  create(
    @Req() req,
    @Param('projectId') projectId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    const userId = req.user.sub;
    return this.tasksService.create(userId, projectId, createTaskDto);
  }

  @Get(':projectId')
  findAllByProjectId(@Param('projectId') projectId: string) {
    return this.tasksService.findAllByProjectId(projectId);
  }

  @Patch(':taskId')
  toggleTaskStatus(@Req() req, @Param('taskId') taskId: string) {
    const userId = req.user.sub;
    return this.tasksService.toggleTaskStatus(userId, taskId);
  }

  @Delete(':taskId')
  deleteTask(@Req() req, @Param('taskId') taskId: string) {
    const userId = req.user.sub;
    return this.tasksService.deleteTask(userId, taskId);
  }
}
