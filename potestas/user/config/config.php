<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['debug'] = '0';
$config['enable_devlog_alerts'] = 'n';
$config['cache_driver'] = 'file';
$config['cookie_prefix'] = '';
$config['require_cookie_consent'] = 'n';
$config['force_redirect'] = 'n';
$config['index_page'] = '';
$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'n';
$config['show_ee_news'] = 'n';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '5.2.2';
$config['encryption_key'] = '39a7d208bfd81ff8f92ebf5ca02a56e37d97b9d4';
$config['session_crypt_key'] = 'aea9319024a27136365135faf5aa569952606f3c';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'egm_hsc826',
		'username' => 'egm_hspusr',
		'password' => 'e68SAGMqj1%PprB2',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);
$config['share_analytics'] = 'y';

// EOF