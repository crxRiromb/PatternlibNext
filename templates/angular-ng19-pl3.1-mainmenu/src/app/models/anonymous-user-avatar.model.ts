import { UserAvatar } from './user-avatar.model';

export class AnonymousUserAvatar extends UserAvatar {
  constructor() {
    super(false, 'Anonymous', 'A', 'Guest User');
  }
}
