import { TestBed } from '@angular/core/testing';

import { FilterEmitterService } from './filter-emitter.service';

describe('FilterEmitterService', () => {
	let service: FilterEmitterService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FilterEmitterService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
