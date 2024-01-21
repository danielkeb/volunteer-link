import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private prismaService: PrismaService) {}

  async create(name: string) {
    // Check if a location with the given name already exists
    const existingLocation = await this.prismaService.locations.findUnique({
      where: { name },
    });

    if (existingLocation) {
      throw new ConflictException('Location already exists');
    }

    const location = await this.prismaService.locations.create({
      data: { name },
    });

    return location;
  }

  async findAll() {
    return await this.prismaService.locations.findMany();
  }

  async findOneById(id: string) {
    const location = await this.prismaService.locations.findUnique({
      where: { id },
    });

    if (location) return location;
    else
      throw new NotFoundException(
        'Location with the specified ID cannot be found',
      );
  }

  async findOneByName(name: string) {
    const location = await this.prismaService.locations.findUnique({
      where: { name },
    });

    if (location) return location;
    else
      throw new NotFoundException(
        'Location with the specified name cannot be found',
      );
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    return await this.prismaService.locations.update({
      where: { id },
      data: updateLocationDto,
    });
  }

  async remove(id: string) {
    const location = await this.prismaService.locations.delete({
      where: { id },
    });

    if (location) return { message: 'Location successfully deleted' };
    else throw new InternalServerErrorException();
  }
}
