import Config from '../config';
import UserService from './user.service';
import MemberService from './member.service';

const config = Config.getInstance();
config.initConfig();            // initialize config service
const userService = new UserService();
const memberService = new MemberService();

export default {
  config: config,
  userService: userService,
  memberService: memberService
}