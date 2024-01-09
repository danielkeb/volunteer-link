import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const logger = new Logger('seeder');

  // Create roles
  const adminRole = await prisma.roles.create({
    data: { name: 'Admin', description: 'Full access to all features' },
  });
  const volunteerRole = await prisma.roles.create({
    data: { name: 'Volunteer', description: 'Can contribute to projects' },
  });

  // Create locations
  const newYork = await prisma.locations.create({
    data: { name: 'Addis Ababa' },
  });
  const london = await prisma.locations.create({
    data: { name: 'Hawassa' },
  });

  // Create users, assigning roles and locations
  const adminPassword = 'user.admin';
  const volunteerPassword = 'user.member';
  const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
  const hashedVolunteerPassword = await bcrypt.hash(volunteerPassword, 10);

  await prisma.users.createMany({
    data: [
      {
        firstName: 'user',
        lastName: 'admin',
        username: 'admin',
        email: 'user.admin@test.com',
        password: hashedAdminPassword,
        roleId: adminRole.id,
        locationId: newYork.id,
      },
      {
        firstName: 'user',
        lastName: 'volunteer',
        username: 'volunteer',
        email: 'user.volunteer@test.com',
        password: hashedVolunteerPassword,
        roleId: volunteerRole.id,
        locationId: london.id,
      },
    ],
  });

  logger.log('Seeded successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
