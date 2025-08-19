export type TimelineCategory = 'experience' | 'education' | 'certificates'

export interface TimelineItemSharedProps {
	title: string
	place: string // Company, University, Platform
	dateStart: string // Could be a string like "YYYY-MM" or a full date. Consider Date object if complex parsing needed.
	dateEnd: string // Same as dateStart, or "Present" / "Current"
	description?: string | string[] // Single string or array of achievement/description points
	descriptionKey?: string
	location?: string
	link?: string // URL to company, project, certificate, etc.
	logoUrl?: string // URL for a logo image
}

// If all categories share these exact props plus a category type:
export interface TimelineItem extends TimelineItemSharedProps {
	id: string // Unique ID for mapping and keys
	category: TimelineCategory
}

// Alternatively, if categories might have more distinct props in the future:
// export interface ExperienceItem extends TimelineItemSharedProps {
//   category: 'experience';
//   // any experience-specific props
// }

// export interface EducationItem extends TimelineItemSharedProps {
//   category: 'education';
//   degree?: string; // e.g., Bachelor of Science
//   fieldOfStudy?: string; // e.g., Computer Science
// }

// export interface CertificateItem extends TimelineItemSharedProps {
//   category: 'certificates';
//   issuingOrganization?: string; // If different from 'place'
//   credentialId?: string;
// }

// For now, the generic TimelineItem seems sufficient based on the request.
// We can expand to specific types if needed.
