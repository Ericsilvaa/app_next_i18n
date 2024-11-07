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
export interface RelatedProgram extends Program {
  id: string
}

const RelatedPrograms: RelatedProgram[] = [
  {
    id: '1',
    title: 'Program A',
    description: 'Description of Program A',
    fullDescription:
      'Full description of Program A, including objectives and goals.',
    duration: '3 months',
    admissionRequirements: 'Requirements for Program A',
    careers: 'Career paths for Program A'
  },
  {
    id: '2',
    title: 'Program B',
    description: 'Description of Program B',
    fullDescription:
      'Full description of Program B, including objectives and goals.',
    duration: '6 months',
    admissionRequirements: 'Requirements for Program B',
    careers: 'Career paths for Program B'
  },
  {
    id: '3',
    title: 'Program C',
    description: 'Description of Program C',
    fullDescription:
      'Full description of Program C, including objectives and goals.',
    duration: '1 year',
    admissionRequirements: 'Requirements for Program C',
    careers: 'Career paths for Program C'
  },
  {
    id: '4',
    title: 'Program D',
    description: 'Description of Program D',
    fullDescription:
      'Full description of Program D, including objectives and goals.',
    duration: '4 months',
    admissionRequirements: 'Requirements for Program D',
    careers: 'Career paths for Program D'
  },
  {
    id: '5',
    title: 'Program E',
    description: 'Description of Program E',
    fullDescription:
      'Full description of Program E, including objectives and goals.',
    duration: '2 years',
    admissionRequirements: 'Requirements for Program E',
    careers: 'Career paths for Program E'
  },
  {
    id: '6',
    title: 'Program F',
    description: 'Description of Program F',
    fullDescription:
      'Full description of Program F, including objectives and goals.',
    duration: '6 weeks',
    admissionRequirements: 'Requirements for Program F',
    careers: 'Career paths for Program F'
  }
]
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

export { Programs, ProgramsSectionCard, RelatedPrograms }
