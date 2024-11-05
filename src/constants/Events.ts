type EventDetailsKeys =
  | 'eventName'
  | 'eventDate'
  | 'eventLocation'
  | 'eventOrganizer'
  | 'targetAudience'
  | 'eventDescription'

type EventDetailsLabels =
  | 'eventNameLabel'
  | 'eventDateLabel'
  | 'eventLocationLabel'
  | 'eventOrganizerLabel'
  | 'targetAudienceLabel'
  | 'eventDescriptionLabel'

interface EventDetail {
  label: EventDetailsLabels
  key: EventDetailsKeys
}

type InternationalizedType = 'pt' | 'en' | 'it' | 'es'

const EventDetails: EventDetail[] = [
  { label: 'eventNameLabel', key: 'eventName' },
  { label: 'eventDateLabel', key: 'eventDate' },
  { label: 'eventLocationLabel', key: 'eventLocation' },
  { label: 'eventOrganizerLabel', key: 'eventOrganizer' },
  { label: 'targetAudienceLabel', key: 'targetAudience' },
  { label: 'eventDescriptionLabel', key: 'eventDescription' }
]

const EventSections = [
  { title: 'upcomingEvents', description: 'noEvents' },
  { title: 'pastEvents', description: 'eventGallery' }
]

const EventActions = ['registerButton', 'viewDetails']
const EventExtras = ['joinUsMessage']

const sampleEventTranslations: Record<
  InternationalizedType,
  Record<EventDetailsKeys, string>
> = {
  pt: {
    eventName: 'Workshop de Inovação',
    eventDate: '10 de Novembro de 2024',
    eventLocation: 'Centro de Convenções, Sala A',
    eventOrganizer: 'Instituto de Inovação',
    targetAudience: 'Profissionais e Estudantes',
    eventDescription:
      'Um evento focado em tecnologias inovadoras e suas aplicações na indústria.'
  },
  en: {
    eventName: 'Innovation Workshop',
    eventDate: 'November 10, 2024',
    eventLocation: 'Convention Center, Room A',
    eventOrganizer: 'Institute of Innovation',
    targetAudience: 'Professionals and Students',
    eventDescription:
      'An event focused on innovative technologies and their applications in the industry.'
  },
  it: {
    eventName: 'Workshop di Innovazione',
    eventDate: '10 Novembre 2024',
    eventLocation: 'Centro Congressi, Sala A',
    eventOrganizer: 'Istituto di Innovazione',
    targetAudience: 'Professionisti e Studenti',
    eventDescription:
      "Un evento incentrato sulle tecnologie innovative e le loro applicazioni nell'industria."
  },
  es: {
    eventName: 'Taller de Innovación',
    eventDate: '10 de Noviembre de 2024',
    eventLocation: 'Centro de Convenciones, Sala A',
    eventOrganizer: 'Instituto de Innovación',
    targetAudience: 'Profesionales y Estudiantes',
    eventDescription:
      'Un evento enfocado en tecnologías innovadoras y sus aplicaciones en la industria.'
  }
}

export {
  EventActions,
  EventDetails,
  EventExtras,
  EventSections,
  sampleEventTranslations
}
