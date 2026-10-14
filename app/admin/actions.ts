'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createArtist(formData: FormData) {
  const name = formData.get('name') as string
  const bio = formData.get('bio') as string
  const imageUrl = formData.get('imageUrl') as string

  await prisma.artist.create({
    data: { name, bio, imageUrl },
  })

  revalidatePath('/admin')
}

export async function createAlbum(formData: FormData) {
  const title = formData.get('title') as string
  const artistId = formData.get('artistId') as string
  const coverUrl = formData.get('coverUrl') as string

  await prisma.album.create({
    data: { title, artistId, coverUrl },
  })

  revalidatePath('/admin')
}

export async function uploadSong(formData: FormData) {
  const title = formData.get('title') as string
  const albumId = formData.get('albumId') as string
  const file = formData.get('file') as File

  if (!file) throw new Error('Arquivo de áudio é obrigatório')

  // Simulation of upload to Cloudinary/S3
  const simulatedUrl = `https://storage.mlmusic.com/songs/${Date.now()}-${file.name}`

  await prisma.song.create({
    data: {
      title,
      albumId,
      audioUrl: simulatedUrl,
      duration: 200, // simulation
    },
  })

  revalidatePath('/admin')
}
