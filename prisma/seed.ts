import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const artist = await prisma.artist.create({
    data: {
      name: 'Artista de Teste',
      bio: 'Bio do artista de teste para o ML Music',
      imageUrl: 'https://images.unsplash.com/photo-1493225255756-7952b23777a7?w=200&h=200&fit=crop',
      verified: true,
    },
  })

  const album = await prisma.album.create({
    data: {
      title: 'Primeiro Álbum ML',
      coverUrl: 'https://images.unsplash.com/photo-1614613535308-4c87769363ec?w=200&h=200&fit=crop',
      artistId: artist.id,
      releaseDate: new Date(),
    },
  })

  await prisma.song.createMany({
    data: [
      {
        title: 'Música 1',
        duration: 210,
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        albumId: album.id,
      },
      {
        title: 'Música 2',
        duration: 185,
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        albumId: album.id,
      },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
