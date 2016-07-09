/**
 * This class is generated by jOOQ
 */
package com.parallax.server.blocklyprop.db.generated;


import com.parallax.server.blocklyprop.db.generated.tables.Project;
import com.parallax.server.blocklyprop.db.generated.tables.ProjectSharing;
import com.parallax.server.blocklyprop.db.generated.tables.SecRole;
import com.parallax.server.blocklyprop.db.generated.tables.SecUserRole;
import com.parallax.server.blocklyprop.db.generated.tables.Session;
import com.parallax.server.blocklyprop.db.generated.tables.Tag;
import com.parallax.server.blocklyprop.db.generated.tables.User;
import com.parallax.server.blocklyprop.db.generated.tables.records.ProjectRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.ProjectSharingRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.SecRoleRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.SecUserRoleRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.SessionRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.TagRecord;
import com.parallax.server.blocklyprop.db.generated.tables.records.UserRecord;

import javax.annotation.Generated;

import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.UniqueKey;
import org.jooq.impl.AbstractKeys;


/**
 * A class modelling foreign key relationships between tables of the <code>blocklyprop</code> 
 * schema
 */
@Generated(
	value = {
		"http://www.jooq.org",
		"jOOQ version:3.6.1"
	},
	comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Keys {

	// -------------------------------------------------------------------------
	// IDENTITY definitions
	// -------------------------------------------------------------------------

	public static final Identity<ProjectRecord, Long> IDENTITY_PROJECT = Identities0.IDENTITY_PROJECT;
	public static final Identity<ProjectSharingRecord, Long> IDENTITY_PROJECT_SHARING = Identities0.IDENTITY_PROJECT_SHARING;
	public static final Identity<SecRoleRecord, Long> IDENTITY_SEC_ROLE = Identities0.IDENTITY_SEC_ROLE;
	public static final Identity<TagRecord, Long> IDENTITY_TAG = Identities0.IDENTITY_TAG;
	public static final Identity<UserRecord, Long> IDENTITY_USER = Identities0.IDENTITY_USER;

	// -------------------------------------------------------------------------
	// UNIQUE and PRIMARY KEY definitions
	// -------------------------------------------------------------------------

	public static final UniqueKey<ProjectRecord> KEY_PROJECT_PRIMARY = UniqueKeys0.KEY_PROJECT_PRIMARY;
	public static final UniqueKey<ProjectSharingRecord> KEY_PROJECT_SHARING_PRIMARY = UniqueKeys0.KEY_PROJECT_SHARING_PRIMARY;
	public static final UniqueKey<ProjectSharingRecord> KEY_PROJECT_SHARING_PROJECT_SHARING_ID_PROJECT_SHAREKEY_UINDEX = UniqueKeys0.KEY_PROJECT_SHARING_PROJECT_SHARING_ID_PROJECT_SHAREKEY_UINDEX;
	public static final UniqueKey<SecRoleRecord> KEY_SEC_ROLE_PRIMARY = UniqueKeys0.KEY_SEC_ROLE_PRIMARY;
	public static final UniqueKey<SecRoleRecord> KEY_SEC_ROLE_NAME_UNIQUE = UniqueKeys0.KEY_SEC_ROLE_NAME_UNIQUE;
	public static final UniqueKey<SecUserRoleRecord> KEY_SEC_USER_ROLE_UNIQUE_USER_ROLE = UniqueKeys0.KEY_SEC_USER_ROLE_UNIQUE_USER_ROLE;
	public static final UniqueKey<SessionRecord> KEY_SESSION_PRIMARY = UniqueKeys0.KEY_SESSION_PRIMARY;
	public static final UniqueKey<TagRecord> KEY_TAG_PRIMARY = UniqueKeys0.KEY_TAG_PRIMARY;
	public static final UniqueKey<TagRecord> KEY_TAG_NAME_UNIQUE = UniqueKeys0.KEY_TAG_NAME_UNIQUE;
	public static final UniqueKey<UserRecord> KEY_USER_PRIMARY = UniqueKeys0.KEY_USER_PRIMARY;

	// -------------------------------------------------------------------------
	// FOREIGN KEY definitions
	// -------------------------------------------------------------------------

	public static final ForeignKey<ProjectSharingRecord, ProjectRecord> PROJECT_SHARING_PROJECT_ID_FK = ForeignKeys0.PROJECT_SHARING_PROJECT_ID_FK;
	public static final ForeignKey<SecUserRoleRecord, SecRoleRecord> FK_USER_ROLE_ROLE = ForeignKeys0.FK_USER_ROLE_ROLE;

	// -------------------------------------------------------------------------
	// [#1459] distribute members to avoid static initialisers > 64kb
	// -------------------------------------------------------------------------

	private static class Identities0 extends AbstractKeys {
		public static Identity<ProjectRecord, Long> IDENTITY_PROJECT = createIdentity(Project.PROJECT, Project.PROJECT.ID);
		public static Identity<ProjectSharingRecord, Long> IDENTITY_PROJECT_SHARING = createIdentity(ProjectSharing.PROJECT_SHARING, ProjectSharing.PROJECT_SHARING.ID);
		public static Identity<SecRoleRecord, Long> IDENTITY_SEC_ROLE = createIdentity(SecRole.SEC_ROLE, SecRole.SEC_ROLE.ID);
		public static Identity<TagRecord, Long> IDENTITY_TAG = createIdentity(Tag.TAG, Tag.TAG.ID);
		public static Identity<UserRecord, Long> IDENTITY_USER = createIdentity(User.USER, User.USER.ID);
	}

	private static class UniqueKeys0 extends AbstractKeys {
		public static final UniqueKey<ProjectRecord> KEY_PROJECT_PRIMARY = createUniqueKey(Project.PROJECT, Project.PROJECT.ID);
		public static final UniqueKey<ProjectSharingRecord> KEY_PROJECT_SHARING_PRIMARY = createUniqueKey(ProjectSharing.PROJECT_SHARING, ProjectSharing.PROJECT_SHARING.ID);
		public static final UniqueKey<ProjectSharingRecord> KEY_PROJECT_SHARING_PROJECT_SHARING_ID_PROJECT_SHAREKEY_UINDEX = createUniqueKey(ProjectSharing.PROJECT_SHARING, ProjectSharing.PROJECT_SHARING.ID_PROJECT, ProjectSharing.PROJECT_SHARING.SHAREKEY);
		public static final UniqueKey<SecRoleRecord> KEY_SEC_ROLE_PRIMARY = createUniqueKey(SecRole.SEC_ROLE, SecRole.SEC_ROLE.ID);
		public static final UniqueKey<SecRoleRecord> KEY_SEC_ROLE_NAME_UNIQUE = createUniqueKey(SecRole.SEC_ROLE, SecRole.SEC_ROLE.NAME);
		public static final UniqueKey<SecUserRoleRecord> KEY_SEC_USER_ROLE_UNIQUE_USER_ROLE = createUniqueKey(SecUserRole.SEC_USER_ROLE, SecUserRole.SEC_USER_ROLE.ID_USER, SecUserRole.SEC_USER_ROLE.ID_ROLE);
		public static final UniqueKey<SessionRecord> KEY_SESSION_PRIMARY = createUniqueKey(Session.SESSION, Session.SESSION.IDSESSION);
		public static final UniqueKey<TagRecord> KEY_TAG_PRIMARY = createUniqueKey(Tag.TAG, Tag.TAG.ID);
		public static final UniqueKey<TagRecord> KEY_TAG_NAME_UNIQUE = createUniqueKey(Tag.TAG, Tag.TAG.NAME);
		public static final UniqueKey<UserRecord> KEY_USER_PRIMARY = createUniqueKey(User.USER, User.USER.ID);
	}

	private static class ForeignKeys0 extends AbstractKeys {
		public static final ForeignKey<ProjectSharingRecord, ProjectRecord> PROJECT_SHARING_PROJECT_ID_FK = createForeignKey(com.parallax.server.blocklyprop.db.generated.Keys.KEY_PROJECT_PRIMARY, ProjectSharing.PROJECT_SHARING, ProjectSharing.PROJECT_SHARING.ID_PROJECT);
		public static final ForeignKey<SecUserRoleRecord, SecRoleRecord> FK_USER_ROLE_ROLE = createForeignKey(com.parallax.server.blocklyprop.db.generated.Keys.KEY_SEC_ROLE_PRIMARY, SecUserRole.SEC_USER_ROLE, SecUserRole.SEC_USER_ROLE.ID_ROLE);
	}
}
