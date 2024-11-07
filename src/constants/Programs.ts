export type ProgramID =
  | 'educationProgram'
  | 'healthProgram'
  | 'communityProgram'
  | 'volunteerProgram'
  | 'undergraduate'
  | 'graduate'

export type ProgramsSectionType = {
  key: ProgramID
  title: string
  description: string
}
export interface Program {
  title: string
  description: string
  fullDescription: string
  duration: string
  admissionRequirements: string | string[]
  careers: string | string[]
}

const Programs: Record<ProgramID, Program> = {
  educationProgram: {
    title: 'educationProgram.title',
    description: 'educationProgram.description',
    fullDescription: 'educationProgram.fullDescription',
    duration: 'educationProgram.duration',
    admissionRequirements: 'educationProgram.admissionRequirements',
    careers: 'educationProgram.careers'
  },
  healthProgram: {
    title: 'healthProgram.title',
    description: 'healthProgram.description',
    fullDescription: 'healthProgram.fullDescription',
    duration: 'healthProgram.duration',
    admissionRequirements: 'healthProgram.admissionRequirements',
    careers: 'healthProgram.careers'
  },
  communityProgram: {
    title: 'communityProgram.title',
    description: 'communityProgram.description',
    fullDescription: 'communityProgram.fullDescription',
    duration: 'communityProgram.duration',
    admissionRequirements: 'communityProgram.admissionRequirements',
    careers: 'communityProgram.careers'
  },
  volunteerProgram: {
    title: 'volunteerProgram.title',
    description: 'volunteerProgram.description',
    fullDescription: 'volunteerProgram.fullDescription',
    duration: 'volunteerProgram.duration',
    admissionRequirements: 'volunteerProgram.admissionRequirements',
    careers: 'volunteerProgram.careers'
  },
  undergraduate: {
    title: 'undergraduate.title',
    description: 'undergraduate.description',
    fullDescription: 'undergraduate.fullDescription',
    duration: 'undergraduate.duration',
    admissionRequirements: 'undergraduate.admissionRequirements',
    careers: 'undergraduate.careers'
  },
  graduate: {
    title: 'graduate.title',
    description: 'graduate.description',
    fullDescription: 'graduate.fullDescription',
    duration: 'graduate.duration',
    admissionRequirements: 'graduate.admissionRequirements',
    careers: 'graduate.careers'
  }
}

const ProgramsSectionCard: ProgramsSectionType[] = [
  {
    key: 'educationProgram',
    title: 'educationProgram.title',
    description: 'educationProgram.description'
  },
  {
    key: 'volunteerProgram',
    title: 'volunteerProgram.title',
    description: 'volunteerProgram.description'
  },
  {
    key: 'healthProgram',
    title: 'healthProgram.title',
    description: 'healthProgram.description'
  },
  {
    key: 'communityProgram',
    title: 'communityProgram.title',
    description: 'communityProgram.description'
  },
  {
    key: 'undergraduate',
    title: 'undergraduate.title',
    description: 'undergraduate.description'
  },
  {
    key: 'graduate',
    title: 'graduate.title',
    description: 'graduate.description'
  }
]

export { Programs, ProgramsSectionCard }
